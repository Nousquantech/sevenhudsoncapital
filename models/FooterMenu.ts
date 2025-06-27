import mongoose from "mongoose";

// Define the schema for submenu items
// This schema can be nested within the main menu item schema
const submenuItemSchema = new mongoose.Schema({
  title: { type: String },
    link: { type: String, default: "#" } // Default link to "#" if not provided

}, {
  _id: false // Prevents creation of an _id field for nested submenus
});

const menuItemSchema = new mongoose.Schema({
  title: { type: String },
  submenu:[submenuItemSchema],
});




const MenuItem = mongoose.models.FooterMenu || mongoose.model("FooterMenu", menuItemSchema);

export default MenuItem;