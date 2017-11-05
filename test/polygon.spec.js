import assert from 'power-assert';
import Polygon from 'polygon';

describe('Polygon', () => {
  it('contructor', () => {
    const polygon = new Polygon(10, 2);
    assert.equal(polygon.height, 10);
    assert.equal(polygon.width, 2);
  });

  it('area', () => {
    const polygon = new Polygon(10, 2);
    assert.equal(polygon.area, 20);
  });
});
