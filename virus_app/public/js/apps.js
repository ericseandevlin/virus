$(function() {
  console.log('js loaded');
});

angular.module('Cyberpages', []).directive('ngcyberpages', function() {
  return {

    controllerAs: 'cyberpages',
    controller: ['$http', function SitesCtrl($http) {

      this.$http = $http;

      var self = this;
      self.sites = [];
      self.totalSites = 0;
      self.site = {};
      self.newSite = {};

      // ==================
      // get all sites
      // ==================
      this.getSites = function() {
        console.log('getting all sites');
        // ajax get request to /sites
        self.$http.get('/sites').then(function(response) {
          self.sites = response.data;
          for (var i=0; i<self.sites.length; i++){
            self.sites[i].show = true;
          };
          console.log(self.sites);
        });
        return self.sites;
      };
      this.getSites();


      // ==================
      // new site
      // ==================
      this.newSite = function() {
        self.$http.post('/sites', {
          title: this.formTitle,
          description: this.formDescription,
          link: this.formLink,
          site_img_link: this.formImg

        }).then(function success(response) {
          self.sites.unshift(response.data);

          // Empty form
          self.formTitle = '';
          self.formDescription = '';
          self.formLink = '';
          self.formImg = '';
        }, function error() {
          console.log('error');
        });
      } // end newSite


      // ==================
      // edit site
      // ==================
      // passed site object from form
      this.populateForm = function(site) {
				self.formSiteId = site._id;
        self.formTitle = site.title;
        self.formDescription = site.description;
        self.formLink = site.link;
        self.formImg = site.site_img_link;

			};
			this.editSite = function() {
				var id = this.formSiteId;
        console.log('id ', id);
				self.$http.put('/sites/' + id, {
          title: this.formTitle,
          description: this.formDescription,
          link: this.formLink,
          site_img_link: this.formImg }).then(function success (response) {
					console.log('from server', response);
					self.getSites();

          // Empty form
          self.formTitle = '';
          self.formDescription = '';
          self.formLink = '';
          self.formImg = '';
        }, function error() {
          console.log('error');
        });
      } // end editSite

      // ==================
      // delete site
      // ==================
      // gets _id value of site from form
      this.deleteSite = function(id) {
        console.log('id ', id);
				self.$http.delete('/sites/'+id).then(function success (response) {
					console.log('from server', response);
					self.getSites();
        }, function error() {
          console.log('delete error');
        });
      } // end deleteSite

    }] // close controller
  }; // close return
}) // close angular module
