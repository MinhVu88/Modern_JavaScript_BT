// the factory pattern creates an interface for object creation, in which subclasses can define what classes to instantiate
// this pattern is often used to manage, mantain & manipulate different objects that have common characteristics
// an example is a paid membership app or website where members are of different types but share the same properties & methods
// we're gonna create a member factory that takes a member type & creates a new object based on that type
function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name); // a subclass
        } else if(type === 'standard') {
            member = new StandardMembership(name);
        } else if(type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`Name: ${this.name} | Membership type: ${this.type} | Cost: ${this.cost}`);
        };

        return member; // an object
    };
};

const SimpleMembership = function(name) {
    this.name = name;

    this.cost = '$5';
};

const StandardMembership = function(name) {
    this.name = name;

    this.cost = '$10';
};

const SuperMembership = function(name) {
    this.name = name;

    this.cost = '$15';
};

members = [];

members.push(new MemberFactory().createMember('Paul D\'Amour', 'simple'));

members.push(new MemberFactory().createMember('Justin Chancellor', 'standard'));

members.push(new MemberFactory().createMember('Dan Carey', 'standard'));

members.push(new MemberFactory().createMember('Adam Jones', 'super'));

members.push(new MemberFactory().createMember('Maynard Keenan', 'super'));

members.forEach(member => member.define());