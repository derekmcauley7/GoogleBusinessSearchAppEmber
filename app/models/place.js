import DS from 'ember-data';
import Model from 'ember-data/model';

const { attr } = DS;
export default DS.Model.extend({
  name: attr('string'),
  address: attr('string'),
  rating: attr('string'),
  img: attr('string')
});
