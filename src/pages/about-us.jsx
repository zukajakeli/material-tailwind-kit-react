import {
  Avatar,
  Textarea,
  Button,
  Input,
  Typography,
} from "@material-tailwind/react";

import { Footer } from "@/widgets/layout";

export function AboutUs() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-col justify-center justify-items-center">
                <Typography variant="h2" className="mt-10 text-center">
                  ჯაყელთა სახლი
                </Typography>
                <div className="flex w-full justify-center px-4 ">
                  <div className="relative w-full p-10">
                    ჯაყელი ( ქართული : ჯაყელი ) იყო ქართული სამთავრო ( მთავარი )
                    და სამცხის სამთავროს მმართველი დინასტია, ჩორჩანელთა სახლის
                    განშტოება. "ჯაყელი", სიტყვასიტყვით ნიშნავს "ჯაყის/დან",
                    თავდაპირველად ტერიტორიული ეპითეტი იყო. ეს სახელი ოჯახმა
                    მიიღო ჯაყის ციხის ჯაყის-წყალზე, მტკვრის (კურას) ერთ-ერთი
                    მარცხენა უბანი (ამჟამად თურქეთში ). ჯაყელებმა თავიანთი
                    წარმომავლობა მიიღეს მე-9 საუკუნის ბოლოს აზნაურ ბეშქენში,
                    ჩორჩანელიდან, რომლის შთამომავლები ფლობდნენ ჯაყის, პოსტხოვის
                    (თანამედროვე პოსოფი , თურქეთი) და ურაველის ( ახალციხის
                    მახლობლად , საქართველო) ხეობებს. ტიტული "ჯაყელი" პირველად
                    ჩნდება თუხარისის ბატონის ( ერისთავი ) ბეშქენის (I) და
                    ქუელისა და ბეშქენის შესაძლო შვილის მურვანის სახელებში.
                    <br /> <br />
                    შემდეგ გვესმის ბეშქენ (II), მურვანის შესაძლო ვაჟი,ჯავახეთში
                    1118 წ. 1050-დან 1190-იან წლებამდე ჯაყელებმა მონაწილეობა
                    მიიღეს რამდენიმე ფეოდალურ აჯანყებაში საქართველოს ბაგრატიდი
                    მეფეების წინააღმდეგ. საბოლოოდ, საქართველოს თამარ მეფის
                    (1184-1213) დროს ოჯახი, ბოცოს პირისპირ, შეურაცხყოფა მიაყენა
                    და ჯაყელის წოდება, ისევე როგორც მათი ქონების უმეტესი ნაწილი,
                    გადავიდა ციხისჯვრის სახლის ნათესავებზე (ციხისჯვრელები). ),
                    ასევე ჩორჩანელის განშტოება. ბოცო ჯაყელის მიტოვებული ოჯახი
                    ცნობილი გახდა როგორც ბოცოსძე, ბოლოს მემნასთან გაიგო, რომელიც
                    1226 წელს ხვრეზმიდის მმართველის ჯალალ ად-დინ მანგუბერდის
                    წინააღმდეგ თბილისის თავდაცვის დროს დაიღუპა ; და ძმასთან
                    ბოცოსთან ერთად. ციხისჯვრის ივანე-ყვარყვარე (რ. დაახლ.
                    1195-1247 წწ.), რომელსაც ბოცოს მეფის თამარ ტიტულებითა და
                    სამფლობელოებით აღესრულა, ჯაყელთა დინასტიის ახალი ხაზი
                    გაჩნდა. სარგის I- ის (რს. 1260-1285 წწ.) პირისპირ მან
                    მიაღწია სამცხის მემკვიდრეობით სამთავროს და 1268 წელს
                    მონღოლთა ილხანთა პროტექტორატის ქვეშ მყოფი საქართველოს
                    მეფეებისგან ფაქტობრივად დამოუკიდებელი გახდა . ჯაყელის
                    რეზიდენცია დაარსდა საფარაში .
                    <br /> <br />
                    1334 წელს საქართველოს მეფემ გიორგი V- მ სამცხე კვლავ
                    შემოიტანა ქართულ სამეფოში და მის ბიძას სარგის II ჯაყელს (
                    1306-1334 წწ.) მიანიჭა ათაბაგის ღირსება , რომელიც მე-17
                    საუკუნემდე ჯაყელთა ხაზით მემკვიდრეობით გადავიდა. . ამიერიდან
                    სამთავრო ცნობილი იყო როგორც სამცხე-საათაბაგო , ამ პორტმანტოს
                    უკანასკნელი ნაწილი, რაც ნიშნავს "ათაბაგებს". [1] [2] XV
                    საუკუნის შუა ხანებში ჯაყელების ოჯახმა საბოლოოდ მოახერხა
                    მეტოქე დიდგვაროვანი ოჯახების ვასალად დაყვანა ან სამცხიდან
                    განდევნა. 1490/1 წლისთვის, როდესაც საქართველოს სამეფო
                    საბოლოოდ დაიშალა უამრავ სუსტ და მეტოქე პოლიტიკად, ჯაყელები
                    იყვნენ ყველაზე აქტიურ მოწინააღმდეგე ფრაქციებს შორის, „არა
                    პასუხისმგებლობის გარეშე ერის პოლიტიკური ერთიანობის
                    შენარჩუნებაზე“, როგორც ბრიტანელები . ამას მეცნიერი უილიამ
                    ედვარდ დევიდ ალენი ამბობს.
                    <br /> <br />
                    1578 წლიდან სამცხე ოსმალეთის ექსპანსიის სამიზნე გახდა და
                    ჯაყელი ათაბაგები, უშედეგო წინააღმდეგობის შემდეგ,
                    მოხერხებულად განდგომდნენ ისლამს და გახდნენ მემკვიდრეობითი
                    ფაშები .ახალციხის პოზიცია, რომელიც მათ შეინარჩუნეს,
                    გარკვეული პერიოდის განმავლობაში, ოჯახში ოსმალეთს, ირანულ
                    დინასტიებსა და ქართველ მმართველებს შორის განუწყვეტელი ომების
                    განმავლობაში , 1829 წელს რუსეთის საბოლოო დაპყრობამდე (იხ .
                    ახალზითის ბრძოლა ). ქვაბლიანის ხეობიდან იუნკრებმა მიიღო
                    რუსული მმართველობა და მიიღო ათაბეკოვ-კვაბლიანსკის გვარი.
                  </div>
                </div>

                <div className="w-full px-4 lg:order-1 lg:w-4/12"></div>
              </div>
              <div className="flex w-full flex-col gap-6 p-10"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
