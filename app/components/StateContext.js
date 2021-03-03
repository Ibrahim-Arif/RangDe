import React, { useContext, useState } from "react";

const RedContext = React.createContext();
const RedUpdateContext = React.createContext();

const GreenContext = React.createContext();
const GreenUpdateContext = React.createContext();

const BlueContext = React.createContext();
const BlueUpdateContext = React.createContext();

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

function StateProvider({ children }) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
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
};
