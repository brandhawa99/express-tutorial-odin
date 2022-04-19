
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name : {type:String, required:true, maxlength:100},
        family_name : {type:String, required:true, maxlength:100},
        date_of_birth:{type:Date},
        date_of_death: {type:Date},

    }
);

//Virtual for author's full name



AuthorSchema.virtual('lifespan').get(function(){
    var lifetime_string = '';
    if(this.date_of_birth){
        lifetime_string=this.date_of_birth.getYear().toString();
    }
    lifetime_string += '-';
    if(this.date_of_death){
        lifetime_string += this.date_of_death.getYear();
    }
    return lifetime_string;
})

AuthorSchema.virtual('url').get(function(){
    return '/catalog/author/'+this._id;
});

AuthorSchema
.virtual('name')
.get(function (){
    var fullName = '';
    if(this.first_name && this.family_name){
        fullName = this.family_name +", "+this.first_name; 
    }
    if(!this.first_name || !this.family_name){
        fullName = '';
    }
    return fullName;
});

module.exports = mongoose.model('Author',AuthorSchema);;