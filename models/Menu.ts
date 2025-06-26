import mongoose from "mongoose";

// Define the schema for submenu items
// This schema can be nested within the main menu item schema
const submenuItemSchema = new mongoose.Schema({
  title: { type: String },
  subitems: [{
    name: { type: String },
    description: { type: String },
    icon: { type: String },
    href: { type: String },
    submenu: [{}] // This allows for further nesting of submenus
  }],
// TODO try to add to mongose submmenu


}, {
  _id: false // Prevents creation of an _id field for nested submenus
});

const menuItemSchema = new mongoose.Schema({
  name: { type: String },
  href: { type: String },
  isSubmenu: {type: Boolean, default: false},
  submenu:[submenuItemSchema],
});




const MenuItem = mongoose.models.Menu || mongoose.model("Menu", menuItemSchema);

export default MenuItem;
