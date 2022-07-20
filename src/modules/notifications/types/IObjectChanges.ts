import Events from '@modules/notifications/types/Events';

export default interface IObjectChanges {
  object: string;
  type: string;
  values: {
    id: string;
    time: string;
    event: Events;
    device_id: number;
    identifier_id: string;
    user_id: number;
    portal_id: string;
    identification_rule_id: string;
    card_value: string;
    log_type_id: string;
  };
}
