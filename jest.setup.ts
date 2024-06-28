import "@testing-library/jest-dom";
import "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/jest-globals";

jest.mock("@mui/x-charts", () => ({
    BarChart: jest.fn().mockImplementation(({ children }) => children)
}));
