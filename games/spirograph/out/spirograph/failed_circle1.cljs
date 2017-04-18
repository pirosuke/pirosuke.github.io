(ns spirograph.failed-circle1
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def setting {:r 150
              :gear-r 50})

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
   :x (* (:r setting) (q/cos 0))
   :y (* (:r setting) (q/sin 0))
   :px (* (:r setting) (q/cos 0))
   :py (* (:r setting) (q/sin 0))
   :gear {:angle 0
          :x (* (:gear-r setting) (q/cos 0))
          :y (* (:gear-r setting) (q/sin 0))
          :px (* (:gear-r setting) (q/cos 0))
          :py (* (:gear-r setting) (q/sin 0))}})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  (let [angle (+ (:angle state) 0.1)
        gear-angle (+ (:angle (:gear state)) (* 0.1 (/ (:r setting) (:gear-r setting))))]
    {:color (mod (+ (:color state) 0.7) 255)
     :angle angle
     :x (* (:r setting) (q/cos angle))
     :y (* (:r setting) (q/sin angle))
     :px (:x state)
     :py (:y state)
     :gear {:angle gear-angle
            :x (* (:gear-r setting) (q/cos gear-angle))
            :y (* (:gear-r setting) (q/sin gear-angle))
            :px (:x (:gear state))
            :py (:y (:gear state))}}))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ; Set circle color.
  (q/stroke (:color state) 255 255)
    ; Move origin point to the center of the sketch.
  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]
                      (q/line (:px state) (:py state) (:x state) (:y state))
                      (q/with-translation [(:x state)
                                           (:y state)]
                                          ;(q/ellipse 10 10 5 5)
                                          (q/line (:px (:gear state)) 
                                                  (:py (:gear state)) 
                                                  (:x (:gear state)) 
                                                  (:y (:gear state)))
                                          )))

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
