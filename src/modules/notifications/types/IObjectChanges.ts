export default interface IObjectChanges {
  object: string;
  type: string;
  values: {
    id: string;
    time: string;
    event: string;
    device_id: number;
    identifier_id: string;
    user_id: string;
    portal_id: string;
    identification_rule_id: string;
    card_value: string;
    log_type_id: string;
  };
}
