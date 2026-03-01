import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1 max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground mb-6">سياسة الخصوصية</h1>
        <div className="prose prose-sm text-foreground space-y-4 leading-relaxed">
          <p>نحن في منصة ملجئك نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.</p>
          
          <h2 className="text-xl font-bold mt-6">البيانات التي نجمعها</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>بيانات الموقع الجغرافي (فقط عند الطلب)</li>
            <li>معلومات الملاجئ المقدمة من المستخدمين</li>
            <li>بيانات التسجيل (البريد الإلكتروني)</li>
          </ul>

          <h2 className="text-xl font-bold mt-6">كيف نستخدم بياناتك</h2>
          <p className="text-muted-foreground">
            نستخدم بيانات الموقع فقط لتحديد أقرب ملجأ ولا نخزنها أو نشاركها مع أطراف ثالثة.
          </p>

          <h2 className="text-xl font-bold mt-6">إخلاء المسؤولية</h2>
          <p className="text-muted-foreground">
            المعلومات مقدمة من المجتمع ويجب اتباع تعليمات الجهات الرسمية. هذه المنصة
            لا تغني عن التوجيهات الرسمية في حالات الطوارئ.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
