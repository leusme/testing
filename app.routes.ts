import type { Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { LoginComponent } from "./pages/login/login.component"
import { RegisterComponent } from "./pages/register/register.component"
import { DashboardComponent } from "./pages/dashboard/dashboard.component"
import { PatientsComponent } from "./pages/patients/patients.component"
import { DietsComponent } from "./pages/diets/diets.component"
import { ChatComponent } from "./pages/chat/chat.component"
import { StudentDashboardComponent } from "./pages/student/dashboard/dashboard.component"
import { StudentDietComponent } from "./pages/student/diet/diet.component"
import { StudentProgressComponent } from "./pages/student/progress/progress.component"
import { StudentChatComponent } from "./pages/student/chat/chat.component"
import { StudentPreferencesComponent } from "./pages/student/preferences/preferences.component"
import { NewDietComponent } from "./pages/diets/new/new-diet.component"
import { DietDetailComponent } from "./pages/diets/detail/diet-detail.component"
import { ChatDetailComponent } from "./pages/chat/detail/chat-detail.component"
import { NewPatientComponent } from "./pages/patients/new/new-patient.component"
import { PatientDetailComponent } from "./pages/patients/detail/patient-detail.component"
import { AlunoDashboardComponent } from "./pages/aluno/dashboard/dashboard.component"
import { AlunoDietasComponent } from "./pages/aluno/dietas/dietas.component"
import { AlunoProgressoComponent } from "./pages/aluno/progresso/progresso.component"
import { AlunoChatComponent } from "./pages/aluno/chat/chat.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login/nutritionist", component: LoginComponent, data: { userType: "nutritionist" } },
  { path: "login/aluno", component: LoginComponent, data: { userType: "aluno" } },
  { path: "register/nutritionist", component: RegisterComponent, data: { userType: "nutritionist" } },
  { path: "register/aluno", component: RegisterComponent, data: { userType: "aluno" } },
  { path: "dashboard", component: DashboardComponent },
  { path: "patients", component: PatientsComponent },
  { path: "patients/new", component: NewPatientComponent },
  { path: "patients/:id", component: PatientDetailComponent },
  { path: "diets", component: DietsComponent },
  { path: "diets/new", component: NewDietComponent },
  { path: "diets/:id", component: DietDetailComponent },
  { path: "chat", component: ChatComponent },
  { path: "chat/:id", component: ChatDetailComponent },
  { path: "aluno/dashboard", component: AlunoDashboardComponent },
  { path: "aluno/dietas", component: AlunoDietasComponent },
  { path: "aluno/progresso", component: AlunoProgressoComponent },
  { path: "aluno/chat", component: AlunoChatComponent },
  { path: "student/dashboard", component: StudentDashboardComponent },
  { path: "student/diet", component: StudentDietComponent },
  { path: "student/progress", component: StudentProgressComponent },
  { path: "student/chat", component: StudentChatComponent },
  { path: "student/preferences", component: StudentPreferencesComponent },
]

