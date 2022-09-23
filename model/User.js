import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    dateOfBirth: { type: String },
    age: { type: Number, default: 0 },
    email: { type: String, trim: true},
    phoneNumber: { type: String, trim: true},
    gender: { type: String },
    password: { type: String, required: true },
    address: { type: String },
    aboutMe: { type: String },
    profession: { type: String },
    city: { type: String },
    accountDetails:[
        {
        accountNumber:{
          type: String,
        },
        bankName:{
          type: String
        },
        accountName:{
          type: String
        }
      }
    ],
    bookingHistory:[
        {
          serviceOrderedBy: { type: String, required: true },
          serviceOrderedByUserId: { type: String },
          serviceOrderedByProfileImage: { type: String },
          serviceStart: { type: String, required: true,},
          serviceEnds: { type: String, required: true, },
          serviceName: { type: String, required: true, trim: true },
          serviceCategoryId: { type: String, required: true, trim: true },
          aboutService: { type: String  },
          duration: { type: Number, required: true },
          serviceCost: { type: Number, required: true },
          discountPercentage: { type: Number },
          TotalCost: { type: Number, required: true },
          serviceOwner: { type:  String },
          serviceOwnerId: { type: String },
          serviceOwnerProfileImage: { type: String },
          serviceImage: { type:  String },
          paymentStatus: {type: String},
          serviceCompleted: {type: Boolean, default: false},
          date: {
              type: Date,
              default: Date.now
          },
        }
    ],
    // matchRequests:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       matchRequestSenderName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       matchRequestSenderProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    //   confirmedMatches:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       matchRequestSenderName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       matchRequestSenderProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    //   rejectedMatches:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       matchRequestSenderName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       matchRequestSenderProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    //   pendingMatches:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       matchRequestSenderName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       matchRequestSenderProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    //   sentMatches:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       userName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       userProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    //   dislikes:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       userName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       userProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    //   matches:[
    //     {
    //       user:{
    //         type: String,
    //       },
    //       matchName:{
    //         type: String
    //       },
    //       email:{
    //         type: String
    //       },
    //       matchProfilePic:{
    //         type: String
    //       },
    //       createdAt: {
    //         type: Date
    //       }
    //     }
    //   ],
    // location: {
    //     type: {
    //        type: String,
    //        enum:['Point'],
    //        default: 'Point'
    //     },
    //     coordinates: {
    //         type: [Number],
    //         // required:true
    //     }
    //  },
    galleryImages:{ type: Array },
    madePayment: { type: Boolean, default: false },
    profilePic: { type: String },
    interests: { type: Array }
    
}, { timestamps: true }); 
// UserSchema.index({
//     location: "2dsphere"
//  });

module.exports = mongoose.model("User", UserSchema);