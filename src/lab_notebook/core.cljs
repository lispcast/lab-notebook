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

(defn app-container [cursor component]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
        (dom/h1 nil "Lab notebook")
        nil
        (for [entry (:entries cursor)]
          (om/build item-view entry))))))

(om/root app-container appstate
  {:target (. js/document (getElementById "app"))})

