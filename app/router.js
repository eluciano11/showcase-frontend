import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("projects", function() {
    this.route("add");

    this.route("specific", {
      path: "/:project_id"
    });

    this.route("edit", {
      path: "/:project_id/edit"
    });

    this.route("delete", {
      path: "/:project_id/delete"
    });
  });

  this.resource("users", function() {
    this.resource("users.edit", {
      path: "/edit/me"
    }, function() {
      this.route("index", {
        path: "/"
      });

      this.route("changePassword");
    });

    this.route("specific", {
      path: "/:user_id"
    });

    this.route("logout");
    this.route("register");
    this.route("forgotPassword");
    this.route("resetPassword");
  });

  this.resource("departments", function() {
    this.route("specific", {
      path: "/:department_id"
    });
  });

  this.resource("universities", function() {
    this.route("specific", {
      path: "/:university_id"
    });
  });

  this.route("search");
  this.route("loading");
  this.route("login");
  this.route("controller");
});

export default Router;