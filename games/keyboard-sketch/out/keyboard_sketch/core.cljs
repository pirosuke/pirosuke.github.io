(ns keyboard-sketch.core
  (:require [quil.core :as q :include-macros true]
     [quil.middleware :as m]))

(defn init-draw-area
  []
  (q/fill 240)
  (q/rect 20 20 (- 700 40) (- 500 100) 3))

(defn draw-board
  []
  (q/background 237 15 14)
  (init-draw-area)
  (q/fill 255)
  (q/ellipse 50 460 60 60)
  (q/ellipse 650 460 60 60)
  (q/fill 0)
  (q/text "d" 30 460)
  (q/text "f" 60 460)
  (q/text "j" 630 460)
  (q/text "k" 660 460))

(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (draw-board)
  {:x (/ (q/width) 2)
   :y (/ (q/width) 2)})

(defn key-pressed [state event]
  (cond (= (:key event) :c)
    (init-draw-area))
  (case (:key event)
        :d (assoc state :x (- (:x state) 1))
        :f (assoc state :x (+ (:x state) 1))
        :j (assoc state :y (- (:y state) 1))
        :k (assoc state :y (+ (:y state) 1))
        state))

(defn draw-state [state]
  (q/fill 0)
  (q/point (:x state) (:y state)))

(q/defsketch keyboard-sketch
             :host "keyboard-sketch"
             :size [700 500]
             :setup setup
             :draw draw-state
             :key-pressed key-pressed
             :middleware [m/fun-mode])
