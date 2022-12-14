import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { ParametersParser } from "./parameters-parser";

/**
 * Observes the route parameters, updating the stored data when it changes. This data is stored in a BehaviorSubject.
 * 
 * The data is updated with a {@link ParametersParser}, which will parse the updated parameters.
 */
export class RouteParametersObserver<T> {

  /**
   * Subject containing the data after the latest change.
   */
  public subject = new BehaviorSubject<T | undefined>(undefined);

  constructor(
    route: ActivatedRoute,
    parser: ParametersParser<T>
  ) {
    // Listens to parameter changes
    route.queryParamMap.subscribe(params => {
      // Parses the new data from the parameters
      const data = parser.parse(params);

      // Updates subject
      this.subject.next(data);
    });
  }

}