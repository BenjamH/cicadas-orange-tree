describe ("Tree", function() {

    it("should instantiate a new tree object", function(){
        var tree = new Tree();
    
        expect(tree).toBeDefined();
    });

    it("should instantiate a new tree with age === 0", function() {
        var tree = new Tree();
    
        expect(tree.age).toEqual(0);
    });

    it("should instantiate a new tree with height === 0", function() {
        var tree = new Tree();
    
        expect(tree.height).toEqual(0);
    });

    it("should instantiate a new tree with orangeCount === 0", function() {
        var tree = new Tree();
    
        expect(tree.orangeCount).toEqual(0);
    });

    describe(".grow()", function() {

        it("should increase the age of the tree by 1 year", function() {
            var tree = new Tree();
      
            tree.grow();
      
            expect(tree.age).toEqual(1);
        });

    xit("should increase the height of the tree by 10 inches", function() {
      var tree=new Tree();
      tree.grow();
      expect(tree.height).toEqual(10);
    });
    xit("should add a random number of oranges if age = FRUIT_BEARING_AGE", function() {
      var tree=new Tree();
      while (tree.age < FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.orangeCount).toBeGreaterThan(0);
    });
    xit("should have 0 oranges if age < FRUIT_BEARING_AGE", function() {
      var tree=new Tree();
      while (tree.age < (FRUIT_BEARING_AGE-1)) {
        tree.grow();
      }
      expect(tree.orangeCount).toEqual(0);
    });
  });

  describe ("die",function() {
    xit("should be alive when age <= MAX_AGE",function() {
      var tree=new Tree();
      while (tree.age < (MAX_AGE-1)) {
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toEqual(true);
    });
    xit("should die when age > MAX_AGE",function() {
      var tree=new Tree();
      while (tree.age < MAX_AGE) {
        tree.grow();
      }
      tree.grow();
      expect(tree.isAlive).toEqual(false);
    });
  });

  describe("dropOrange", function() {
    xit("should return the orange that is removed from oranges", function() {
      var tree=new Tree();
      while (tree.age< FRUIT_BEARING_AGE) {
        tree.grow();
      }
      expect(tree.dropOrange()).toBeDefined();
    });
  });

  describe ("pickOrange", function() {
    xit("should return a orange object", function() {
      expect(pickOrange()).toBeDefined();
    });
    xit("should return an orange with a random diameter > 0", function() {
      var orange = pickOrange();
      expect(orange.diameter).toBeGreaterThan(0);
    });
  });

});
