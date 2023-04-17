import { db } from "./firebase";

export default function writeTripData(tripType, tripTitle, tripDescription, tripStartDate, tripStartPoint, tripEndPoint, tripStepList) {
    const data = {
        is_loop: tripType,
        title: tripTitle,
        description: tripDescription,
        start_date: tripStartDate,
        start_point: tripStartPoint,
        end_point: tripEndPoint,
        steps: tripStepList.map(step => step.name),
    };
    //const reference = db.ref("trips/").push();
    console.log(data)
    //set(reference, data);
}