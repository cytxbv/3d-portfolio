
import {useEffect} from "react"
import * as dat from 'dat.gui'

export function useGUI(callback) {
    useEffect(() => {
      const gui = new dat.GUI();
      callback(gui);
      return () => gui.destroy();
    }, [callback]);
  }