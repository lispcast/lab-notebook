(ns lab-notebook.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(defonce appstate (atom {}))

(defn item-view [cursor component]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:style #js {:marginTop "2em"}}
        (dom/div nil (:summary cursor))
        (dom/div nil (:date-time cursor))
        (dom/div nil (:notes cursor))))))

(defn item-table [cursor component]
  (reify
    om/IInitState
    (init-state [this]
      {:summary ""
       :date-time ""
       :notes ""})
    om/IRenderState
    (render-state [this state]
      (dom/div nil
        (apply dom/div nil
          (for [entry (:entries cursor)]
            (om/build item-view entry)))
        (dom/div nil
          (dom/h3 nil "New entry")
          (dom/form #js {:className "form-horizontal"}
            (dom/input #js {:type "text"
                            :className "form-control"
                            :value (:summary state)
                            :placeholder "Summary"})
            (dom/input #js {:type "text"
                            :className "form-control"
                            :value (:date-time state)
                            :placeholder "Time"})
            (dom/textarea #js {:className "form-control":placeholder "Notes"
                               :value (:notes state)
                               :rows "5"})
            (dom/button #js {:className "btn btn-primary"
                             :onClick (fn [e]
                                        (.preventDefault e)
                                        (om/transact! cursor :entries
                                          (fn [entries]
                                            ((fnil conj []) entries
                                             {:summary "summary"
                                              :date-time "date-time"
                                              :notes "notes"}))))}
              "Save")))))))

(defn app-container [cursor component]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h1 nil "Lab notebook")
        (om/build item-table cursor)))))

(om/root app-container appstate
  {:target (. js/document (getElementById "app"))})

