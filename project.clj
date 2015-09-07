(defproject lab-notebook "0.1.0-SNAPSHOT"
  :description "Lab Notebook in ClojureScript to accompany LispCast
  Single Page Applications with ClojureScript and Om"
  :url "http://purelyfunctional.tv/single-page-applications"
  :license {:name "Creative Commons Zero"
            :url "http://creativecommons.org/publicdomain/zero/1.0/"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [org.omcljs/om "0.8.8"]]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.3.1"]]
  :figwheel {:nrepl-port 7888}
  :target-path "target/%s"
  :clean-targets ^{:protect false} [:target-path "out"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main lab-notebook.core}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:optimizations :advanced
                                   :output-to "target/js"}
                        :externs ["marked.min.js"]}]})
