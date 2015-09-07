(ns lab-notebook.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(defonce appstate (atom {}))

(defn item-form [cursor component options]
  (reify
    om/IInitState
    (init-state [this]
      {:summary (get cursor :summary "")
       :date-time (get cursor :date-time "")
       :notes (get cursor :notes "")})
    om/IRenderState
    (render-state [this state]
      (dom/form #js {:className "form-horizontal"}
        (dom/input #js {:type "text"
                        :className "form-control"
                        :value (:summary state)
                        :onChange (fn [e]
                                    (om/set-state! component :summary
                                      (-> e .-target .-value)))
                        :placeholder "Summary"})
        (dom/input #js {:type "text"
                        :className "form-control"
                        :value (:date-time state)
                        :onChange (fn [e]
                                    (om/set-state! component :date-time
                                      (-> e .-target .-value)))
                        :placeholder "Time"})
        (dom/textarea #js {:className "form-control":placeholder "Notes"
                           :value (:notes state)
                           :onChange (fn [e]
                                       (om/set-state! component :notes
                                         (-> e .-target .-value)))
                           :rows "5"})
        (dom/button #js {:className "btn btn-primary"
                         :onClick (fn [e]
                                    (.preventDefault e)
                                    (when-let [on-save (:on-save options)]
                                      (on-save (:summary state) (:date-time state) (:notes state))))}
          "Save")))))

(defn item-view [cursor component]
  (reify
    om/IInitState
    (init-state [this]
      {:editing? false})
    om/IRenderState
    (render-state [this state]
      (if (:editing? state)
        (dom/div #js {:style #js {:marginTop "2em"}}
          (om/build item-form cursor
            {:opts {:on-save (fn [summary date-time notes]
                               (om/transact! cursor (fn [entry]
                                                      (assoc entry
                                                        :summary summary
                                                        :date-time date-time
                                                        :notes notes)))
                               (om/set-state! component :editing? false))}}))
        (dom/div #js {:style #js {:marginTop "2em"}}
          (dom/button #js {:className "btn btn-primary"
                           :onClick (fn [e]
                                      (om/set-state! component :editing? true))}
            "Edit")
          (dom/div nil (:summary cursor))
          (dom/div nil (:date-time cursor))
          (dom/div nil (:notes cursor)))))))

(defn item-table [cursor component]
  (reify
    om/IInitState
    (init-state [this]
      {:editing? false})
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (dom/button #js {:className "btn btn-primary"
                         :onClick (fn [e]
                                    (om/set-state! component :editing? true))}
          "New entry")
        (apply dom/div nil
          (for [entry (:entries cursor)]
            (om/build item-view entry)))
        (when (or (:editing? state)
                (empty? (:entries cursor)))
          (dom/div nil
            (dom/h3 nil "New entry")
            (om/build item-form {}
              {:opts {:on-save (fn [summary date-time notes]
                                 (om/transact! cursor :entries
                                   (fn [entries]
                                     ((fnil conj []) entries
                                      {:summary summary
                                       :date-time date-time
                                       :notes notes})))
                                 (om/set-state! component :editing? false))}})))))))

(defn app-container [cursor component]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil "Lab notebook")
        (om/build item-table cursor)))))

(om/root app-container appstate
  {:target (. js/document (getElementById "app"))})

