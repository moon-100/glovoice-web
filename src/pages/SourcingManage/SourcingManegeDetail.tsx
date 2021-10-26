import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Iprops {
  sourcingManageId: number | undefined;
}

const SourcingManegeDetail = ({ sourcingManageId }: Iprops) => {
  const [remarkLength, setRemarkLength] = useState(0);

  useEffect(() => {
    fetch(`/:${sourcingManageId}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <Container>
      <DetailContainer>
        <FileInfoContainer>
          <FileInfoHeader>File Infomation</FileInfoHeader>
          <FileInfoTableContainer>
            <FileTitleContainer>
              <FileTitleHeader>File Title</FileTitleHeader>
              <TitleInput placeholder="Please enter a combination of at least 6 digits of English and numbers." />
            </FileTitleContainer>
            <FileSizeContainer>
              <FileSizeHeader>File Size</FileSizeHeader>
              <FileSizeText>12.10MB</FileSizeText>
            </FileSizeContainer>
            <RemarkContainer>
              <RemarkHeader>Remarks</RemarkHeader>
              <RemarkInputBox>
                <RemarkInput
                  placeholder="Please enter remarks."
                  onChange={(e) => {
                    setRemarkLength(e.target.value.length);
                  }}
                  maxLength={1000}
                />
                <RemarkInputLength>({remarkLength}/1000)</RemarkInputLength>
              </RemarkInputBox>
            </RemarkContainer>
          </FileInfoTableContainer>
          <FileInfoBtnContainer>
            <GotoListBtn>List</GotoListBtn>
            <SaveBtn>Save</SaveBtn>
          </FileInfoBtnContainer>
        </FileInfoContainer>
        <PhysicalFileContainer>
          <PhysicalFileHeaderContainer>
            <PhysicalFileHeader>Physical File</PhysicalFileHeader>
            <PhysicalFileHeaderText>
              *업로드 취소 및 파일 삭제시 모든 정보가 사라집니다
            </PhysicalFileHeaderText>
          </PhysicalFileHeaderContainer>
          <PhysicalFileTableContainer>
            <FileDownloadContainer>
              <FileDownloadHeader>File Download</FileDownloadHeader>
              <DownloadBtn>Download</DownloadBtn>
            </FileDownloadContainer>
            <UploadStatusContainer>
              <UploadStatusHeader>Upload Status</UploadStatusHeader>
              <UploadStatusText>완료</UploadStatusText>
              <ViewBtn>View</ViewBtn>
            </UploadStatusContainer>
            <AuthCountContainer>
              <AuthCountHeader>Authorization Count</AuthCountHeader>
              <AuthCountText>완료</AuthCountText>
            </AuthCountContainer>
            <UploadDateContainer>
              <UploadDateHeader>Upload Start Date</UploadDateHeader>
              <UploadDateText>완료</UploadDateText>
            </UploadDateContainer>
            <StatusChangeDateContainer>
              <StatusChangeDateHeader>
                Status Change Date
              </StatusChangeDateHeader>
              <StatusChangeDateText>완료</StatusChangeDateText>
            </StatusChangeDateContainer>
          </PhysicalFileTableContainer>
        </PhysicalFileContainer>
        <ClientAppointContainer>
          <ClientAppointHeader>Client Appoint</ClientAppointHeader>
          <ClientAppointTableContainer>
            <ClientContainer>
              <ClientHeader>Client</ClientHeader>
              <ClientContent>
                <ClientText>Client A</ClientText>
                <ClearBtn>Clear</ClearBtn>
              </ClientContent>
            </ClientContainer>
            <DownloadCountContainer>
              <DownloadCountHeader>Available Download Time</DownloadCountHeader>
            </DownloadCountContainer>
            <DownloadDateContainer>
              <DownloadDateHeader>Available Download Period</DownloadDateHeader>
            </DownloadDateContainer>
            <PublishContainer>
              <PublishHeader>Publish</PublishHeader>
            </PublishContainer>
          </ClientAppointTableContainer>
        </ClientAppointContainer>
        <ClientListContainer>
          <ClientListHeaderContainer>ddd</ClientListHeaderContainer>
        </ClientListContainer>
      </DetailContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 292px;
  height: 100vh;
  overflow-y: auto;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FileInfoContainer = styled.div`
  margin-bottom: 20px;
`;

const FileInfoHeader = styled.h1`
  margin: 10px;
  font-size: 25px;
`;

const FileInfoTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid rgb(147, 147, 147);
  border-bottom: 1px solid rgb(147, 147, 147);
`;

const FileTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const FileTitleHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const TitleInput = styled.input`
  width: 400px;
  height: 26px;
  margin-left: 25px;
  padding-left: 10px;
  font-size: 12px;
`;

const FileSizeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const FileSizeHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const FileSizeText = styled.div`
  margin-left: 25px;
`;

const RemarkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 170px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const RemarkHeader = styled.div`
  display: flex;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-top: 13px;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const RemarkInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const RemarkInput = styled.textarea`
  width: 400px;
  height: 130px;
  padding-top: 7px;
  padding-left: 10px;
  font-size: 12px;
  resize: none;
`;

const RemarkInputLength = styled.div`
  padding-top: 7px;
  color: red;
  font-size: 15px;
`;

const FileInfoBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const GotoListBtn = styled.button`
  width: 100px;
  height: 25px;
  color: orange;
  background-color: white;
  border: 1px solid orange;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const SaveBtn = styled.button`
  width: 100px;
  height: 25px;
  color: white;
  background-color: rgb(93, 180, 54);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const PhysicalFileContainer = styled.div`
  margin-bottom: 20px;
`;

const PhysicalFileHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const PhysicalFileHeader = styled.h1`
  margin: 10px;
  font-size: 25px;
`;

const PhysicalFileHeaderText = styled.div`
  margin-bottom: 10px;
  color: red;
`;

const PhysicalFileTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid rgb(147, 147, 147);
  border-bottom: 1px solid rgb(147, 147, 147);
`;

const FileDownloadContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const FileDownloadHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const DownloadBtn = styled.button`
  width: 100px;
  height: 25px;
  margin-left: 20px;
  color: white;
  background-color: rgb(93, 180, 54);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const UploadStatusContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const UploadStatusHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const UploadStatusText = styled.div`
  width: 100px;
  margin-left: 20px;
`;

const ViewBtn = styled.button`
  width: 100px;
  height: 25px;
  margin-left: 20px;
  color: white;
  background-color: rgb(93, 180, 54);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const AuthCountContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const AuthCountHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const AuthCountText = styled.div`
  width: 100px;
  margin-left: 20px;
`;

const UploadDateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const UploadDateHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const UploadDateText = styled.div`
  width: 100px;
  margin-left: 20px;
`;

const StatusChangeDateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const StatusChangeDateHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const StatusChangeDateText = styled.div`
  width: 100px;
  margin-left: 20px;
`;

const ClientAppointContainer = styled.div`
  margin-bottom: 20px;
`;

const ClientAppointHeader = styled.h1`
  margin: 10px;
  font-size: 25px;
`;

const ClientAppointTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid rgb(147, 147, 147);
  border-bottom: 1px solid rgb(147, 147, 147);
`;

const ClientContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const ClientHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const ClientContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  width: 100%;
`;

const ClientText = styled.div``;

const ClearBtn = styled.button`
  width: 100px;
  height: 25px;
  color: white;
  background-color: rgb(93, 180, 54);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const DownloadCountContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const DownloadCountHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const DownloadDateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const DownloadDateHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const PublishContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const PublishHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 150px;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const ClientListContainer = styled.div`
  margin-bottom: 20px;
`;

const ClientListHeaderContainer = styled.div``;

export default SourcingManegeDetail;
