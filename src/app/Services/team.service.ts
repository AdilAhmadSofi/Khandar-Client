import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../Models/api-response';
import { Observable } from 'rxjs';
import { TeamRequest, TeamResponse } from '../Models/team';
import { environment } from 'src/environments/environment';
import { TeamMemberInfoResponse, TeamMemberRequest, TeamMemberResponse } from '../Models/teamMember';
import { TeamAssignedAppealResponse, TeamAssignmentRequest, TeamAssignmentResponse } from '../Models/teamAssignment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient) { }

  
  addTeam(team:TeamRequest):Observable<ApiResponse<TeamResponse>>{
    return this.httpClient.post<ApiResponse<TeamResponse>>(environment.apiBaseUrl+"teams",team)
   }

  getAllTeams():Observable<ApiResponse<TeamResponse[]>> {
    return this.httpClient.get<ApiResponse<TeamResponse[]>>(`${environment.apiBaseUrl}teams`);
  }


  getMyTeams():Observable<ApiResponse<TeamResponse[]>> {
    return this.httpClient.get<ApiResponse<TeamResponse[]>>(`${environment.apiBaseUrl}teams/member-id`);
  }
    
  addTeamMember(teamMember:TeamMemberRequest):Observable<ApiResponse<TeamMemberResponse>>{
    return this.httpClient.post<ApiResponse<TeamMemberResponse>>(environment.apiBaseUrl+"TeamMembers",teamMember)
   }

   getAllTeamsMembers(id:string):Observable<ApiResponse<TeamMemberInfoResponse[]>> {
    return this.httpClient.get<ApiResponse<TeamMemberInfoResponse[]>>(`${environment.apiBaseUrl}TeamMembers/members/${id}`);
  }


  assignTeam(model:TeamAssignmentRequest):Observable<ApiResponse<TeamAssignmentResponse>>{
    return this.httpClient.post<ApiResponse<TeamAssignmentResponse>>(environment.apiBaseUrl+"TeamAssignments",model)
   }  




}
