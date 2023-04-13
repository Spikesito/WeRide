import { getDatabase } from "firebase/database";

export default writeTripData = () => {
    const db = getDatabase();
    const data = ;
    const reference = ref(db, "trips/" + tripId);
    set(reference, data);
}