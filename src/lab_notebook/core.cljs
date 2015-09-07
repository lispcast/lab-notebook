(ns lab-notebook.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(defonce appstate (atom {}))

(defn app-container [cursor component]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
        (dom/h1 nil "Lab notebook")
        nil
        (for [entry (:entries cursor)]
          (dom/div nil
            (dom/div nil (:summary entry))
            (dom/div nil (:date-time entry))
            (dom/div nil (:notes entry))))))))

(om/root app-container appstate
  {:target (. js/document (getElementById "app"))})

