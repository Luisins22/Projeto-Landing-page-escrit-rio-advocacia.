<?php
// DADOS — EDITE AQUI!
$destinatario = 'seu-email@dominio.com';  // SEU E-MAIL
$remetente = 'site@seu-dominio.com.br';    // E-MAIL DO DOMÍNIO (crie no cPanel)
$nomeRemetente = '[Nome do Escritório]';

// DADOS DO FORMULÁRIO
$nome = trim($_POST['nome'] ?? '');
$email = trim($_POST['email'] ?? '');
$telefone = trim($_POST['telefone'] ?? '');
$mensagem = trim($_POST['mensagem'] ?? '');

// VALIDAÇÃO
if (!$nome || !$email || !$mensagem || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: index.html#contato?erro=1');
    exit;
}

// ASSUNTO E CORPO
$assunto = "Nova mensagem do site — de {$nome}";
$corpo = "
Nome: {$nome}
E-mail: {$email}
Telefone: {$telefone}

Mensagem:
{$mensagem}
";

// CABEÇALHOS
$headers = "From: {$nomeRemetente} <{$remetente}>\r\n";
$headers .= "Reply-To: {$nome} <{$email}>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ENVIO
if (mail($destinatario, $assunto, $corpo, $headers)) {
    header('Location: index.html?sucesso=1#contato');
} else {
    header('Location: index.html#contato?erro=2');
}
exit;