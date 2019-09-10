import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  pathForType(){
    console.log();
    return 'place?search=' + sessionStorage.getItem("SessionName");
  }
});
