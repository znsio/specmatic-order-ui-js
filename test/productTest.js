import { assert } from 'chai';
import { showProducts } from '../src/product.js';

before(function () {
    document.body.innerHTML = '<div id="products"></div>';
});

describe('Fetch products', function () {
    it('should populate products on load', async () => {
        await showProducts();
        assert.equal(1, document.getElementsByClassName('data-row').length);
    }).timeout(50000);
});
