import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["inayeem729@gmail.com"],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    console.log("RESEND RESULT:", result);

    return Response.json({ success: true, result });
  } catch (error) {
    console.error("RESEND ERROR:", error);

    return Response.json(
      { error: String(error) },
      { status: 500 }
    );
  }
}