import { useState, createContext, ReactNode } from "react";

type TAppContext = {
  isModalOpen: boolean;
  setIsModalOpen: (arg1: boolean) => void;
  projectId: number | null;
  setProjectId: (arg1: number) => void;
};

const AppContext = createContext<TAppContext>({
  isModalOpen: false,
  setIsModalOpen: () => null,
  projectId: null,
  setProjectId: () => null,
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number | null>(null);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        projectId,
        setProjectId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
