import{test}from'node:test';import assert from'node:assert/strict';import{products,filterProducts,restore,total}from'./model.js';
test('twelve unique sample products',()=>assert.equal(new Set(products.map(p=>p.id)).size,12));
test('category and Arabic text combine',()=>assert.equal(filterProducts({category:'إلكترونيات',query:'سماعات'}).length,1));
test('price limit',()=>assert.ok(filterProducts({max:700}).every(p=>p.price<=70000)));
test('sort is nonmutating',()=>{const ids=products.map(p=>p.id);assert.equal(filterProducts({sort:'asc'})[0].id,'mug');assert.deepEqual(ids,products.map(p=>p.id))});
test('favorite IDs filter',()=>assert.equal(filterProducts({favorites:['watch']})[0].id,'watch'));
test('corrupt storage is ignored',()=>['bad','null','[]','3'].forEach(x=>assert.deepEqual(restore(x),{cart:{},favorites:[]})));
test('storage IDs and quantities sanitized',()=>assert.deepEqual(restore(JSON.stringify({cart:{watch:100,evil:2,bag:-1},favorites:['watch','evil','watch']})),{cart:{watch:9},favorites:['watch']}));
test('integer total',()=>assert.equal(total({watch:2,mug:1}),519700));
