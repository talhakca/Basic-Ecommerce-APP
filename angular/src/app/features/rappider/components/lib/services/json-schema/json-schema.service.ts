import { Injectable } from '@angular/core';
import { clone, cloneDeep } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class JsonSchemaService {
  constructor() {}

  /**
   * find latest element in element name array
   *
   * @param {string[]} elementNames
   * @param {*} jsonSchema
   * @return {*}
   * @memberof JsonSchemaService
   */
  findElementInJsonSchema(elementNames: string[], jsonSchema) {
    if (!elementNames?.length && !jsonSchema) {
      return null;
    }

    let currentElement = this.getDefinitionByElementName(
      elementNames[0],
      jsonSchema
    );
    elementNames.forEach((elementName, index) => {
      if (index !== 0) {
        if (currentElement?.properties[elementName]) {
          currentElement = currentElement?.properties[elementName];
          if (currentElement?.$ref) {
            currentElement = this.getDefinitionByRefName(
              currentElement.$ref,
              jsonSchema
            );
          }
        } else if (currentElement?.$ref) {
          currentElement = this.getDefinitionByRefName(
            currentElement.$ref,
            jsonSchema
          );
        } else {
          currentElement = null;
        }
      }
    });
    return currentElement;
  }

  getDefinitionByElementName(definitionName: string, jsonSchema) {
    return cloneDeep(jsonSchema?.definitions?.[definitionName]);
  }

  getDefinitionByRefName($ref: string, jsonSchema) {
    const elementName = this.getRefNameBy$ref($ref);
    return this.getDefinitionByElementName(elementName, jsonSchema);
  }

  getRefNameBy$ref($ref) {
    const elementRefSplittedArray = $ref.split('/');
    const refName = elementRefSplittedArray[elementRefSplittedArray.length - 1];
    return refName;
  }
}
