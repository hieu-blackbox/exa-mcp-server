// Export the tool registry
export { toolRegistry, API_CONFIG } from "./config.js";

// Import all tools to register them
import "./webSearch.js";
import "./researchPaperSearch.js";
import "./twitterSearch.js";

// When adding a new tool, import it here
// import "./newTool.js"; 