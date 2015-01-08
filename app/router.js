import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("projects", function() {
    this.route("add");

    this.route("university", {
      path: "/:university_slug"
    });

    this.route("universityDepartment", {
      path: "/:university_slug/:department_slug"
    });

    this.route("department", {
      path: "/:department"
    });

    this.route("specificProject", {
      path: "/:project_slug"
    });

    this.route("edit", {
      path: "/:project_slug/edit"
    });

    this.route("delete", {
      path: "/:project_slug/delete"
    });
  });

  this.resource("users", function() {
    this.route("logout");
    this.route("register");
    this.route("settings");
    this.route("forgotPassword");
    this.route("resetPassword");
  });

  this.route("search");
  this.route("loading");
  this.route("login");
});

export default Router;