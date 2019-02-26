(ns lab-notebook.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(defonce appstate (atom {}))

(defn app-container [cursor component]
  (reify
    om/IRender
    (render [this]
      (dom/div nil "Hello!"))))

(om/root app-container appstate
  {:target (. js/document (getElementById "app"))})

