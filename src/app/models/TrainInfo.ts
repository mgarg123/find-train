export interface ITrainInfo {
    ResponseCode: string;
    Status: string;
    TrainNo: string;
    TrainName: string;
    Source: {
        Code: string,
        Arrival: string
    };
    Destination: {
        Code: string,
        Arrival: string
    };
    Message: string;

}