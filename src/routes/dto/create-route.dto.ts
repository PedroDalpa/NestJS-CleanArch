export class CreateRouteDto {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
}

type LatLng = {
  lat: number;
  lng: number;
};
