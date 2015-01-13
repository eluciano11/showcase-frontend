import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("projects", function() {
    this.route("add");

    this.route("specific", {
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
    this.route("specific", {
      path: "/:user_slug"
    });

    this.route("logout");
    this.route("register");
    this.route("forgotPassword");
    this.route("resetPassword");
  });

  this.resource("departments", function() {
    this.route("specific", {
      path: "/:department_slug"
    });
  });

  this.resource("universities", function() {
    this.route("specific", {
      path: "/:university_slug"
    });
  });

  this.route("search");
  this.route("loading");
  this.route("login");
});

export default Router;