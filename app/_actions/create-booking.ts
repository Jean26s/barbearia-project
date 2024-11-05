"user server"
import { db } from "../lib/prisma"

interface CreateBookingParams{
    serviceId:string,
    userId:string,
    date:Date
}

export const createBooking = async({date,serviceId,userId}:CreateBookingParams)=>{
    await db.booking.create({
        data:{
            serviceId,
            userId,
            date
        }
    })
}