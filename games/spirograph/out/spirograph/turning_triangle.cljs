(ns spirograph.turning-triangle
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  (q/background 240)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0
   :x (* 200 (q/cos 0))
   :y (* 200 (q/sin 0))
   :px (* 200 (q/cos 0))
   :py (* 200 (q/sin 0))})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  (let [angle (+ (:angle state) 2)]
    {:color (mod (+ (:color state) 0.7) 255)
     :angle angle
     :x (* 200 (q/cos angle))
     :y (* 200 (q/sin angle))
     :px (:x state)
     :py (:y state)}))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ; Set circle color.
  (q/stroke (:color state) 255 255)
    ; Move origin point to the center of the sketch.
  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]
                      (q/line (:px state) (:py state) (:x state) (:y state))))

(q/defsketch spirograph
  :host "spirograph"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
