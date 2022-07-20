/**
 * Tipo do evento, pode ser:
 * 1. Equipamento inválido
 * 2. Parâmetros de regra de identificação inválidos
 * 3. Não identificado
 * 4. Identificação pendente
 * 5. Timeout na identificação
 * 6. Acesso negado
 * 7. Acesso autorizado
 * 8. Acesso pendente(usado quando o acesso depende de mais de uma pessoa)
 * 9. Usuário não é administrador (usado quando um usuário tenta acessar o menu mas não é administrador)
 * 10. Acesso não identificado (quando o portal é aberto através da API e o motivo não é informado)
 * 11. Acesso através de botoeira
 * 12. Acesso através da interface WEB
 * 13. Desistência de entrada (somente utilizado pela catraca)
 * 14. QR Code
 * 15. DTMF
 */
enum Events {
  INVALID_EQUIPMENT = 1,
  INVALID_RULE_PARAMETERS = 2,
  NOT_IDENTIFIED = 3,
  IDENTIFICATION_PENDING = 4,
  IDENTIFICATION_TIMEOUT = 5,
  ACCESS_DENIED = 6,
  ACCESS_GRANTED = 7,
  ACCESS_PENDING = 8,
  USER_NOT_ADMIN = 9,
  UNKNOWN_REASON = 10,
  BUTTON_ACCESS = 11,
  WEB_ACCESS = 12,
  CANCEL_ENTRY = 13,
  QR_CODE = 14,
  DTMF = 15,
}

export default Events;
