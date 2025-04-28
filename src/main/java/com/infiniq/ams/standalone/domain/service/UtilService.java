package com.infiniq.ams.standalone.domain.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class UtilService {


    public String getClassName(int outerType, int innerType) {
        if (outerType == 1) { // VRU
            return switch (innerType) {
                case 0 -> "pedestrian";
                case 1 -> "Rider";
                default -> "Unknown_VRU";
            };
        } else if (outerType == 2) { // vehicle
            return switch (innerType) {
                case 0 -> "Sedan";
                case 1 -> "Suv";
                case 2 -> "Bus";
                case 3 -> "Truck";
                case 4 -> "Trailer";
                case 5 -> "Heavy_equipment";
                case 6 -> "othersVehicle";
                default -> "Unknown_vehicle";
            };
        } else if (outerType == 3) { // two_wheeler
            return switch (innerType) {
                case 0 -> "bicycle";
                case 1 -> "Motorcycle";
                case 2 -> "personalMobility";
                case 3 -> "OthersTwo_Wheeler";
                default -> "Unknown_two_wheeler";
            };
        } else {
            return "Unknown_type";
        }
    }
}
