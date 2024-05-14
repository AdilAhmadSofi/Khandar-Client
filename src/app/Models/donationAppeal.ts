import { DonationAppealStatus } from "../Enums/donationAppealStatus"
import { Gender } from "../Enums/gender"

export class DonationAppealRequest
{
    amount!:number
    description!:string
    file!:string;
    isPublic!:boolean;
}

export class UpdateAppealRequest
{
    amount!:number
    description!:string
    file!:string
    appealId!:string
    donationAppealStatus!:DonationAppealStatus;
    isPublic!:boolean;
}

export class DonationAppealResponse
{
    amount!:number
    description!:string
    file!:string
    appealId!:string
    beneficiaryId!:string
    donationAppealStatus!:DonationAppealStatus
    appealDate!:string
    filePath!:string;
    isVideo!:boolean;
    caseNo!:string;
    isPublic!:boolean;
    }

    
    export class AppealResponse
    {
        appealId!:string
        beneficiaryId!:string
        name!:string
        gender!:Gender
        contactNo!:string
        email!:string
        amount!:string
        description!:string
        donationAppealStatus!:DonationAppealStatus
        filePath!:string
        appealDate!:string
        isVideo!:boolean
        teamName!:string
        location!:string
        teamAssignmentId?:string;
        caseNo!:string;
        isPublic!:boolean;
    }
    
    export class UpdateAppealStatusRequest
    {
        appealId!:string
        donationAppealStatus!:DonationAppealStatus
    }

    export class DonationAppealByTeamResponse
    {
        teamId!:string
        appealId!:string
        beneficiaryId!:string
        teamName!:string
        contactNo!:string
        beneficiaryName!:string
        description!:string
        gender!:Gender
        amount!:string
        donationAppealStatus!:DonationAppealStatus
        filePath!:string
        appealDate!:string;
        caseNo!:string;
        isPublic!:boolean;
    }





    export class AppealSummary {
       
    
          caseNo!: string;
          amount!: number;
          donors!: number;
    
    }
    // export class HighestGrossingMovies extends Array<HighestGrossingMoviesItem> {
    //     public constructor() {
    //         super();
    //         this.push(new HighestGrossingMoviesItem(
    //         {
    //             franchise: `Marvel Universe`,
    //             totalRevenue: 22.55,
    //             highestGrossing: 2.8
    //         }));
    //         this.push(new HighestGrossingMoviesItem(
    //         {
    //             franchise: `Star Wars`,
    //             totalRevenue: 10.32,
    //             highestGrossing: 2.07
    //         }));
    //         this.push(new HighestGrossingMoviesItem(
    //         {
    //             franchise: `Harry Potter`,
    //             totalRevenue: 9.19,
    //             highestGrossing: 1.34
    //         }));
    //         this.push(new HighestGrossingMoviesItem(
    //         {
    //             franchise: `Avengers`,
    //             totalRevenue: 7.76,
    //             highestGrossing: 2.8
    //         }));
    //         this.push(new HighestGrossingMoviesItem(
    //         {
    //             franchise: `Spider Man`,
    //             totalRevenue: 7.22,
    //             highestGrossing: 1.28
    //         }));
    //         this.push(new HighestGrossingMoviesItem(
    //         {
    //             franchise: `James Bond`,
    //             totalRevenue: 7.12,
    //             highestGrossing: 1.11
    //         }));
    //     }
    // }
    
    