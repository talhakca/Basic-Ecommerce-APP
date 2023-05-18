export interface JsonSchema {
  $schema: string;
  type: string;
  items: { $ref: string };
  definitions: any;
}
