import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  cidade: z.string().trim().min(2, "Informe a cidade").max(80),
  faixa: z.string().min(1, "Selecione uma faixa"),
  tipo: z.string().min(1, "Selecione um tipo"),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

const WHATSAPP = "5581981509195";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const ContactFormSection = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    faixa: "",
    tipo: "",
    mensagem: "",
  });

  const onChange = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Verifique os campos",
        description: parsed.error.errors[0]?.message ?? "Dados inválidos",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);

    // Netlify Forms (funciona automaticamente quando publicado no Netlify)
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contato", ...form }),
      });
    } catch {
      // silencioso — fallback via WhatsApp abaixo
    }

    // Fallback / notificação imediata via WhatsApp
    const msg =
      `Olá Wellyson! Vim pelo site.%0A%0A` +
      `*Nome:* ${form.nome}%0A` +
      `*Telefone:* ${form.telefone}%0A` +
      `*E-mail:* ${form.email}%0A` +
      `*Cidade de interesse:* ${form.cidade}%0A` +
      `*Faixa de investimento:* ${form.faixa}%0A` +
      `*Tipo de imóvel:* ${form.tipo}%0A` +
      (form.mensagem ? `*Mensagem:* ${form.mensagem}` : "");
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank", "noopener,noreferrer");

    setSent(true);
    setLoading(false);
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary mb-4">
              Fale comigo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-4">
              Prefere que eu entre em contato com você?
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed">
              Preencha as informações ao lado e retornarei o mais breve possível
              para entender o que você procura e apresentar as melhores oportunidades
              em Recife e no litoral de Pernambuco.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl shadow-xl border border-border/60 p-8 md:p-10">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                    Recebido! Obrigado pelo contato.
                  </h3>
                  <p className="font-sans text-muted-foreground max-w-md mx-auto">
                    Suas informações foram enviadas e uma conversa no WhatsApp foi
                    aberta para agilizar o retorno. Em breve falamos.
                  </p>
                </div>
              ) : (
                <form
                  name="contato"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contato" />
                  <p className="hidden">
                    <label>
                      Não preencher: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={form.nome}
                        onChange={(e) => onChange("nome", e.target.value)}
                        placeholder="Seu nome completo"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={form.telefone}
                        onChange={(e) => onChange("telefone", e.target.value)}
                        placeholder="(81) 90000-0000"
                        maxLength={20}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        placeholder="voce@email.com"
                        maxLength={255}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cidade">Cidade de interesse</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        value={form.cidade}
                        onChange={(e) => onChange("cidade", e.target.value)}
                        placeholder="Ex: Recife, Porto de Galinhas"
                        maxLength={80}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="faixa">Faixa de investimento</Label>
                      <Select value={form.faixa} onValueChange={(v) => onChange("faixa", v)}>
                        <SelectTrigger id="faixa">
                          <SelectValue placeholder="Selecione uma faixa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Até R$ 300 mil">Até R$ 300 mil</SelectItem>
                          <SelectItem value="R$ 300 mil a R$ 500 mil">R$ 300 mil a R$ 500 mil</SelectItem>
                          <SelectItem value="R$ 500 mil a R$ 700 mil">R$ 500 mil a R$ 700 mil</SelectItem>
                          <SelectItem value="R$ 700 mil a R$ 1 milhão">R$ 700 mil a R$ 1 milhão</SelectItem>
                          <SelectItem value="Acima de R$ 1 milhão">Acima de R$ 1 milhão</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="faixa" value={form.faixa} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de imóvel</Label>
                      <Select value={form.tipo} onValueChange={(v) => onChange("tipo", v)}>
                        <SelectTrigger id="tipo">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Apartamento">Apartamento</SelectItem>
                          <SelectItem value="Studio">Studio</SelectItem>
                          <SelectItem value="Lançamento">Lançamento</SelectItem>
                          <SelectItem value="Imóvel no litoral">Imóvel no litoral</SelectItem>
                          <SelectItem value="Investimento / segunda residência">Investimento / segunda residência</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="tipo" value={form.tipo} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={form.mensagem}
                      onChange={(e) => onChange("mensagem", e.target.value)}
                      placeholder="Conte um pouco sobre o que você procura"
                      maxLength={1000}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="btn-gold w-full font-sans text-base font-medium gap-2 group"
                  >
                    {loading ? "Enviando..." : "Quero receber um contato"}
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Ao enviar, você concorda em ser contatado(a) sobre oportunidades imobiliárias.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
