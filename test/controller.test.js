define(['controller'],
function(Controller) {

  describe("controller", function() {
    
    it('should export constructor', function() {
      expect(Controller).to.exist;
      expect(Controller).to.be.a('function');
    });
    
  });
  
  return { name: "test.controller" }
});
