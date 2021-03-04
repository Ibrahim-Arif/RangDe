import React, { useContext, useState, useEffect } from "react";
import useSaved from "../hooks/useSaved";

const RedContext = React.createContext();
const RedUpdateContext = React.createContext();

const GreenContext = React.createContext();
const GreenUpdateContext = React.createContext();

const BlueContext = React.createContext();
const BlueUpdateContext = React.createContext();

const SavedContext = React.createContext();
const SavedUpdateContext = React.createContext();

function useRed() {
  return useContext(RedContext);
}
function useUpdateRed() {
  return useContext(RedUpdateContext);
}

function useGreen() {
  return useContext(GreenContext);
}
function useUpdateGreen() {
  return useContext(GreenUpdateContext);
}

function useBlue() {
  return useContext(BlueContext);
}
function useUpdateBlue() {
  return useContext(BlueUpdateContext);
}

function useSavedd() {
  return useContext(SavedContext);
}
function useUpdateSavedd() {
  return useContext(SavedUpdateContext);
}

function StateProvider({ children }) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const { saved, setSaved, getSaved, updateSaved } = useSaved();

  useEffect(() => {
    getSaved();
  }, []);

  return (
    <SavedContext.Provider value={saved}>
      <SavedUpdateContext.Provider value={setSaved}>
        <RedContext.Provider value={red}>
          <GreenContext.Provider value={green}>
            <BlueContext.Provider value={blue}>
              <RedUpdateContext.Provider value={setRed}>
                <GreenUpdateContext.Provider value={setGreen}>
                  <BlueUpdateContext.Provider value={setBlue}>
                    {children}
                  </BlueUpdateContext.Provider>
                </GreenUpdateContext.Provider>
              </RedUpdateContext.Provider>
            </BlueContext.Provider>
          </GreenContext.Provider>
        </RedContext.Provider>
      </SavedUpdateContext.Provider>
    </SavedContext.Provider>
  );
}

export {
  useRed,
  useUpdateRed,
  useGreen,
  useUpdateGreen,
  useBlue,
  useUpdateBlue,
  StateProvider,
  useSavedd,
  useUpdateSavedd,
};
