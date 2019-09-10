import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    searchClicked(searchTerm) {
      sessionStorage.SessionName = searchTerm;
      this.transitionToRoute('places');
      return true;
    }
  }
});
