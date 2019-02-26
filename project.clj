(defproject lab-notebook "0.1.0-SNAPSHOT"
  :description "Lab Notebook in ClojureScript to accompany LispCast
  Single Page Applications with ClojureScript and Om"
  :url "http://purelyfunctional.tv/single-page-applications"
  :license {:name "Creative Commons Zero"
            :url "http://creativecommons.org/publicdomain/zero/1.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [org.omcljs/om "1.0.0-beta1"]]
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.18"]]
  :figwheel {:nrepl-port 7888}
  :target-path "target/%s"
  :clean-targets ^{:protect false} [:target-path "out"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main lab-notebook.core
                                   :output-dir "resources/public/js/out"
                                   :asset-path "js/out"}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:optimizations :advanced
                                   :output-to "target/js"
                                   :externs ["marked.min.js"]}}]})
