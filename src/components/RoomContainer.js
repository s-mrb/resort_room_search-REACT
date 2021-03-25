import React from "react";
import RoomsFilter from "./RoomFilter.js";
import RoomsList from "./RoomList";
import {  withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter.js";
import RoomList from "./RoomList";


function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>

    )
}

export default withRoomConsumer(RoomContainer)

// import React from "react";
// import RoomsFilter from "./RoomFilter.js";
// import RoomsList from "./RoomList";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
// return (
//     <RoomConsumer>
//     {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading){
//             return <Loading />
//         }
//         return (
//         <div>
//             Hello from Rooms RoomsContainer
//             <RoomsFilter />
//             <RoomsList />
//         </div>
//         );
//     }}
//     </RoomConsumer>
// );
// }
